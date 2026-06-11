import { useState, useRef, useCallback } from 'react'
import { RetellWebClient } from 'retell-client-js-sdk'

const client = new RetellWebClient()

const BACKEND_URL = "https://backend-demo-55yw.onrender.com";

export function useRetellCall() {
  const [callStatus, setCallStatus] = useState('idle')
  const [callId, setCallId] = useState(null)
  const [transcript, setTranscript] = useState([])
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState(null)
  const timerRef = useRef(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setDuration((prev) => prev + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(timerRef.current)
    setDuration(0)
  }

  const startCall = useCallback(async () => {
    try {
      setError(null)
      setCallStatus('connecting')
      setTranscript([])

      const res = await fetch(BACKEND_URL + '/api/calls/web', {
        method: 'POST'
      })

      const data = await res.json()

      if (!data.accessToken) {
        throw new Error('No access token received')
      }

      setCallId(data.callId)

      await client.startCall({ accessToken: data.accessToken })

      client.on('call_started', () => {
        setCallStatus('active')
        startTimer()
      })

      client.on('call_ended', () => {
        setCallStatus('ended')
        stopTimer()
      })

      client.on('update', (update) => {
        if (update.transcript) {
          setTranscript(update.transcript)
        }
      })

      client.on('error', (err) => {
        setError(err.message || 'Call error occurred')
        setCallStatus('idle')
        stopTimer()
      })
    } catch (err) {
      setError(err.message)
      setCallStatus('idle')
    }
  }, [])

  const endCall = useCallback(() => {
    client.stopCall()
    setCallStatus('ended')
    stopTimer()
  }, [])

  const resetCall = useCallback(() => {
    setCallStatus('idle')
    setCallId(null)
    setTranscript([])
    setDuration(0)
    setError(null)
  }, [])

  return {
    callStatus,
    callId,
    transcript,
    duration,
    error,
    startCall,
    endCall,
    resetCall,
  }
}
