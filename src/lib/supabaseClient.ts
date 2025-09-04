// src/lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';

// Verifique se as variáveis de ambiente estão definidas
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Crie o cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);