export const HOMEPAGE_QUERY = `
  query HomePage {
    homepage {
      title
      subtitle
      formTitle
      email
      city
      send
      availableSoon
      appTitle
    }
  }
`
export const PRIVACY_QUERY = `
  query PrivacyPage {
    privacy {
      title
      content
    }
  }
`
export const TERMS_QUERY = `
  query TermsPage {
    termsOfService {
      title
      content
    }
  }
`
