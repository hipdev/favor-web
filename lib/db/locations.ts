import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient()

export async function addUserEmailAndLocation({
  email,
  location,
}: {
  email: boolean
  location: { place_id: string; formatted_address: string }
}) {
  const { data } = await supabase
    .from('leads')
    .select('*')
    .eq('email', email)
    .maybeSingle()

  if (data) {
    throw new Error('Email already exists')
  }

  const { data: place } = await supabase
    .from('places')
    .select('*')
    .eq('place_id', location.place_id)
    .maybeSingle()

  if (!place) {
    const { error } = await supabase.from('places').insert([{ ...location }])

    if (error) {
      throw new Error(error.message)
    }
  }

  const { error: errorLead } = await supabase
    .from('leads')
    .insert([{ email, place_id: location.place_id }])

  if (errorLead) {
    throw new Error(errorLead.message)
  }

  return { ok: true }
}
