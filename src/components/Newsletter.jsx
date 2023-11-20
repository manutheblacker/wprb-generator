'use client'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export function Newsletter(props) {
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email is required'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (form) => {
    console.log(form)
    setLoading(true)

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(form),
    })

    reset()
    setSubscribed(true)
    setLoading(false)
  }

  return (
    <iframe src='https://manutheblacker.medium.com/subscribe'></iframe>
  )
}
