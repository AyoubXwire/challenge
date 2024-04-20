const LOCALE = "en-US"

type UncertainValue = string | number | Date | null | undefined

export function __text(value: UncertainValue): string {
  try {
    if (!value) return "N/A"

    return String(value)
  } catch (error) {
    console.error(`Could not format text: ${error}`)
    return ""
  }
}

export function __number(value: UncertainValue): string {
  try {
    if (!value || isNaN(Number(value))) return "N/A"

    const intl = new Intl.NumberFormat(LOCALE, {
      maximumFractionDigits: 3,
    })

    // We need to replace the unicode character that looks like a space with a standard space for consistency purposes
    return intl.format(Number(value)).replaceAll(" ", " ")
  } catch (error) {
    console.error(`Could not format number: ${error}`)
    return ""
  }
}

export function __date(value: UncertainValue): string {
  try {
    if (!value) return "N/A"

    const intl = new Intl.DateTimeFormat(LOCALE, {
      dateStyle: "short",
    })

    let date
    if (typeof value === "string") {
      date = new Date(value)
    } else {
      date = value
    }

    return intl.format(date)
  } catch (error) {
    console.error(`Could not format date: ${error}`)
    return ""
  }
}

export function __time(value: UncertainValue): string {
  try {
    if (!value) return "N/A"

    const intl = new Intl.DateTimeFormat(LOCALE, {
      timeStyle: "short",
      hour12: false
    })

    let date
    if (typeof value === "string") {
      date = new Date(value)
    } else {
      date = value
    }

    return intl.format(date)
  } catch (error) {
    console.error(`Could not format time: ${error}`)
    return ""
  }
}
