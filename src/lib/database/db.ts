import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTk0MTU2OCwiZXhwIjoxOTM3NTE3NTY4fQ.CdS-xO_WZQqqliKXd44fnC_10Wp6zhNg6c8vz0xU0GM'
const SUPABASE_URL = "https://rzmybhmvmvnjhnfmzycc.supabase.co"
const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
)

export default supabase