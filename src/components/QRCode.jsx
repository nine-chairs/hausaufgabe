import React from 'react'
import { isIOS } from 'react-device-detect'

const QRCode = () => {
  const generateQRCode = () => {
    const appStoreLink = isIOS
      ? 'https://apps.apple.com/app/whatsapp/id310633997'
      : 'https://play.google.com/store/apps/details?id=com.whatsapp'

    const qrCodeData = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${encodeURIComponent(
      appStoreLink
    )}`

    return qrCodeData
  }

  return (
    <div>
      <img src={generateQRCode()} alt='WhatsApp QR Code' />
    </div>
  )
}

export default QRCode
