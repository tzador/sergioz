import { createFileRoute, redirect } from '@tanstack/react-router'
import { defaultLanguage } from '../pictures'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/$lang', params: { lang: defaultLanguage } })
  },
})
