import supabase from '../../database/supabase.js';

export const User = {
    create: async (name, email, password, number) => {
        const { data, error } = await supabase
            .from('users')
            .insert([{ name, email, password, number }]);

        if (error) throw error;
        return data; // berisi row yang baru dibuat
    },
    update: async (id, name, email, password, number) => {
        const { data, error } = await supabase
            .from('users')
            .update({ name, email, password, number })
            .eq('id', id)       // tentukan row yang ingin diupdate
            .select();          // <- ini penting, agar data yang diupdate dikembalikan

        if (error) throw error;
        return data[0];       // ambil row pertama
    },
    delete: async (id) => {
        const { data, error } = await supabase
            .from('users')
            .delete()
            .eq('id', id)
            .select();
        if (error) throw errorl
        return data;
    },

    findAll: async () => {
        const { data, error } = await supabase
            .from('users')
            .select('*');

        if (error) throw error;
        return data;
    },

    findByEmail: async (email) => {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single(); // ambil 1 row saja

        if (error) throw error;
        return data;
    }
};
