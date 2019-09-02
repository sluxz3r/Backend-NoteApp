const conn = require('../configs/db')

module.exports = {
  // Get All Books
  getNote: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT noted.id, noted.date, noted.title, noted.notes, category.cat_name, category.cat_image, category.cat_color FROM noted INNER JOIN category ON noted.cat=category.id_cat ', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getCategory: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM category', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        } 
      })
    })
  },

  getNoteByCat: (id_note) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT noted.id, noted.date, noted.title, noted.notes, category.cat_name, category.cat_image, category.cat_color FROM noted INNER JOIN category ON noted.cat=category.id_cat WHERE category.id_cat= ?', id_note, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getNoteById: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT noted.id, noted.date, noted.title, noted.notes, category.cat_name, category.cat_image, category.cat_color, noted.cat FROM noted INNER JOIN category ON noted.cat=category.id_cat WHERE noted.id= ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  postNote: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO noted SET ? ', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  postCategory : (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO category SET ? ', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  editNote: (id, data) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE noted SET ? WHERE id= ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  // // Get Borrow 
  //     getBorrows: (bookid) => {
  //       return new Promise((resolve, reject) => {
  //         conn.query('SELECT * FROM status WHERE bookid=?', bookid, (err, result) => {
  //           if (!err) {
  //             resolve(result)
  //           } else {
  //             reject(new Error(err))
  //           }
  //         }) 
  //       })
  //     },

  //   // Get by Name
  //   nameBook: (name) => {
  //     const likeName = '%' + name + '%'
  //     return new Promise((resolve, reject) => {
  //       conn.query('SELECT book.bookid, book.name, book.writer, book.des, book.image, cat.category, loc.location FROM book INNER JOIN cat ON book.fk_cat=cat.catid INNER JOIN loc ON book.fk_loc=loc.locid WHERE book.name LIKE ?', likeName, (err, result) => {
  //         if (!err) {
  //           resolve(result)
  //         } else {
  //           reject(new Error(err))
  //         }
  //       }) 
  //     })
  //   },

  //   // Get by Id
  //   bookId: (bookid) => {
  //     return new Promise((resolve, reject) => {
  //       conn.query('SELECT book.bookid, book.name, book.writer, book.des, book.image, book.status_borrow, cat.category, loc.location FROM book INNER JOIN cat ON book.fk_cat=cat.catid INNER JOIN loc ON book.fk_loc=loc.locid WHERE book.bookid = ?', bookid, (err, result) => {
  //         if (!err) {
  //         resolve(result)
  //       } else {
  //         reject( new Error(err))
  //       }
  //     })
  //   })
  // },

  //   // Get By Category
  //   bookCategory: (category) => {
  //     return new Promise((resolve, reject) => {
  //       conn.query('SELECT book.bookid, book.name, book.writer, book.des, book.image, cat.category, loc.location FROM book INNER JOIN cat ON book.fk_cat=cat.catid INNER JOIN loc ON book.fk_loc=loc.locid WHERE cat.category = ?', category, (err, result) => {
  //         if (!err) {
  //           resolve(result)
  //         } else {
  //           reject(new Error(err))
  //         }
  //       })
  //     })
  //   },

  //   // Get By Location
  //   bookLocation: (location) => {
  //     return new Promise((resolve, reject) => {
  //       conn.query('SELECT book.bookid, book.name, book.writer, book.des, book.image, cat.category, loc.location FROM book INNER JOIN cat ON book.fk_cat=cat.catid INNER JOIN loc ON book.fk_loc=loc.locid WHERE loc.location = ?', location, (err, result) => {
  //         if (!err) {
  //           resolve(result)
  //         } else {
  //           reject(new Error(err))
  //         }
  //       })
  //     })
  //   },

  //   // Add Book 
  //   postBook: (data) => {
  //     return new Promise((resolve, reject) => {
  //       conn.query('INSERT INTO book SET ? ', data, (err, result) => {
  //         if (!err) {
  //           resolve(result)
  //         } else {
  //           reject(new Error(err))
  //         }
  //       })
  //     })
  //   },

  //   // Edit Book
  //   patchBook: (bookid, data) => {
  //     return new Promise((resolve, reject) => {
  //       conn.query('UPDATE book SET ? WHERE bookid= ?', [data, bookid], (err, result) => {
  //         if (!err) {
  //           resolve(result)
  //         } else {
  //             reject(new Error(err))
  //         }
  //       })
  //     })
  //   },

  //   // Delete Book
  //   bookDelete: (bookid) => {
  //     return new Promise((resolve, reject) => {
  //       conn.query('DELETE FROM book WHERE bookid = ?', bookid, (err) => {
  //         if (!err) {
  //           resolve( `Data dengan Id : ${bookid} berhasil di Hapus`)
  //         } else {
  //           reject(new Error(err))
  //         }
  //       })
  //     })
  //   }
}
