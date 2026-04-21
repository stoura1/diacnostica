'use client'

import { useTransition } from 'react'
import { deleteQuote } from './actions'

export default function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    if (!confirm('هل أنت متأكد من حذف هذا الطلب؟')) return
    startTransition(async () => {
      await deleteQuote(id)
    })
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      style={{
        padding: '5px 10px',
        fontSize: '0.85rem',
        backgroundColor: isPending ? '#ccc' : '#ff4d4d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: isPending ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.2s',
        minWidth: '60px',
      }}
    >
      {isPending ? '...' : 'Delete'}
    </button>
  )
}
