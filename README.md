# UAS Sistem Terdistribusi - Microservice CRUD

# 1. Penjelasan Sistem
Aplikasi ini merupakan implementasi arsitektur microservice sederhana
yang terdiri dari dua service utama, yaitu Category Service dan Item Service.
Setiap service berjalan secara independen dan memiliki database masing-masing.
Komunikasi antar service dilakukan menggunakan REST API berbasis JSON.

## 2. Diagram Arsitektur Microservice
ada apa folder Dokumentasi Pengerjaan.pdf
## 3. Penjelasan Setiap Service
A. Category Service
- Mengelola data kategori
- Fitur: CRUD kategori
- Database: category_db
- Teknologi: Express.js, MySQL

B. Item Service
- Mengelola data item
- Setiap item memiliki relasi ke kategori
- Item Service mengambil data kategori melalui REST API Category Service
- Database: item_db
- Teknologi: Express.js, MySQL

## 4. Endpoint API
                      Category Service
                      
| Method | Endpoint            | Deskripsi                     |
| ------ | ------------------- | ----------------------------- |
| GET    | /api/categories     | Ambil semua kategori          |
| GET    | /api/categories/:id | Ambil kategori berdasarkan ID |
| POST   | /api/categories     | Tambah kategori               |
| PUT    | /api/categories/:id | Update kategori               |
| DELETE | /api/categories/:id | Hapus kategori                |

                    Item Service
| Method | Endpoint       | Deskripsi                 |
| ------ | -------------- | ------------------------- |
| GET    | /api/items     | Ambil semua item          | 
| POST   | /api/items     | Tambah item               |
| PUT    | /api/items/:id | Update item               |
| DELETE | /api/items/:id | Hapus item                |

## 5. Cara Menjalankan Aplikasi
npm install
npm run dev

## 6. Screenshot hasil pengujian
ada apa folder Dokumentasi Pengerjaan.pdf
