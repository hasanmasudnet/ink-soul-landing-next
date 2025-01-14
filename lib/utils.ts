import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function GetUTCTimeOf12HourFormat(time: string): string {
  try {
    const date = new Date()
    const [timeValue, period] = time.split(' ')
    const [hours, minutes] = timeValue.split(':')

    const isPM = period === 'PM'
    let hour = parseInt(hours)

    if (isPM && hour !== 12) hour += 12
    if (!isPM && hour === 12) hour = 0

    date.setHours(hour)
    date.setMinutes(parseInt(minutes))

    const timezoneOffset = date.getTimezoneOffset() * 60000
    const utcTime = new Date(date.getTime() + timezoneOffset)

    let utcHour = utcTime.getHours()
    const utcPeriod = utcHour >= 12 ? 'PM' : 'AM'

    if (utcHour > 12) utcHour -= 12
    if (utcHour === 0) utcHour = 12

    const utcMinutes = utcTime.getMinutes().toString().padStart(2, '0')
    return `${utcHour}:${utcMinutes} ${utcPeriod}`
  } catch (error) {
    throw new Error("Invalid time format")
  }
}