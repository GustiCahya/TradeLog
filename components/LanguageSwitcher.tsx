'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (newLocale: string) => {
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    
    const newPathname = `/${newLocale}${pathnameWithoutLocale === '/' ? '' : pathnameWithoutLocale}`
    
    router.push(newPathname)
  }

  return (
    <div className="fixed top-4 right-4 flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded ${
          locale === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('id')}
        className={`px-4 py-2 rounded ${
          locale === 'id' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        ID
      </button>
    </div>
  )
}