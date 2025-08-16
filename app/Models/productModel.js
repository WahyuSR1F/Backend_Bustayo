import supabase from '../../database/supabase.js';

export const Product = {
    create: async (nama, lesensi, harga, count, deskripsi) => {
        const { data, error } = await supabase
            .from('products')
            .insert([{ nama, lesensi, harga, count, deskripsi }]);

        if (error) throw error;
        return data; // data berisi row yang baru dibuat
    },

    update: async (id, nama, lesensi, harga, count, deskripsi) => {
        console.log(nama);
        const { data, error } = await supabase
            .from('products')
            .update({ nama, lesensi, harga, count, deskripsi })
            .eq('id', id)       // tentukan row yang ingin diupdate
            .select();
        if (error) throw error;
        return data;
    },

    delete: async (id) => {
        const { data, error } = await supabase
            .from('products')
            .delete()
            .eq('id', id)
            .select();
        if (error) throw error
        return data;
    },

    search: async (keyword, limit, offset) => {

        const { data, error } = await supabase
            .from('products')
            .select('*')
            .or(`nama.ilike.%${keyword}%,deskripsi.ilike.%${keyword}%,lesensi.ilike.%${keyword}%`)
            .range(offset, offset + limit - 1);
        if (error) throw error
        return data;
    },

    findAll: async () => {
        const { data, error } = await supabase
            .from('products')
            .select('*');

        if (error) throw error;
        return data;
    },

    findByNama: async (nama) => {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('nama', nama); // filter berdasarkan kolom 'nama'

        if (error) throw error;
        return data;
    },

    findById: async (id) => {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single(); // ambil 1 row saja

        if (error) throw error;
        return data;
    }


};
