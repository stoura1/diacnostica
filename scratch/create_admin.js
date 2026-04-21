const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function createAdmin() {
  const { data, error } = await supabase.auth.signUp({
    email: 'admin@admin.com',
    password: '123456',
    options: {
      data: {
        full_name: 'Admin'
      }
    }
  });

  if (error) {
    console.error('Error creating user:', error);
  } else {
    console.log('User created:', data.user?.id);
  }
}

createAdmin();
