const noteModels = require('../models/models')
const noteHelper = require('../helpers/helpers')

module.exports = {
  // getNote: (req, res) => {
  //   return res.json({ message: 'Hello!!! Welcome to Arkademy' })
  // },

  // Get ALl Note
  getNote: (req, res) => {
    noteModels.getNote()
      .then((resultNote) => {
        const result = resultNote
        noteHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getCategory: (req, res) => {
    noteModels.getCategory()
      .then((resultNote) => {
        const result = resultNote
        noteHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getNoteByCat: (req, res) => {
    const id_note = req.params.id_note
    noteModels.getNoteByCat(id_note)
      .then((resultNote) => {
        const result = resultNote
        noteHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error);
      })
  },
  getNoteById: (req, res) => {
    const id = req.params.id
    noteModels.getNoteById(id)
      .then((resultNote) => {
        const result = resultNote[0]
        noteHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error);
      })
  },

  postNote: (req, res) => {
    const data = {
      title: req.body.title,
      notes: req.body.notes,
      cat: req.body.cat,
      date: new Date(),
    }
    noteModels.postNote(data)
      .then((resultNote) => {
        const result = resultNote[0]
        noteHelper.response(res, data, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  postCategory : (req, res) => {
    const data = {
      id_cat: req.body.id_cat,
      cat_name: req.body.cat_name,
      cat_image: req.body.cat_image,
      cat_color: req.body.cat_color,
    }
    noteModels.postCategory(data)
      .then((resultNote) => {
        const result = resultNote[0]
        noteHelper.response(res, data, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  editNote: (req, res) => {
    const data = {
      title: req.body.title,
      notes: req.body.notes,
      cat: req.body.cat,
      date: new Date(),
    }
    const id = req.params.id

    noteModels.editNote(id, data)
      .then((resultNote) => {
        const result = resultNote[0]
        noteHelper.response(res, data, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  // getBorrows: (req, res) => {
  //   const bookid = req.params.bookid
  //   bookModels.getBorrows(bookid)
  //     .then((resultBook) => {
  //       const result = resultBook
  //       BookHelper.response(res, result, 200)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },

  // // Get Books By Name
  // nameBook: (req, res) => {
  //   const name = req.query.name
  //   bookModels.nameBook(name)
  //     .then((resultBook) => {
  //       const result = resultBook
  //       BookHelper.response(res, result, 200)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },

  // // Get Book By Id
  // bookId: (req, res) => {
  //   const bookid = req.params.bookid
  //   bookModels.bookId(bookid)
  //   .then((resultBook) => {
  //     const result = resultBook[0]
  //     BookHelper.response(res, result, 200)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // },

  // // Get By Category
  // bookCategory: (req, res) => {
  //   const category = req.params.category

  //   bookModels.bookCategory(category)
  //     .then((resultBook) => {
  //         const result = resultBook
  //         BookHelper.response(res, result, 200)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   },

  //   // Get By Location
  //   bookLocation: (req, res) => {
  //     const location = req.params.location

  //     bookModels.bookLocation(location)
  //       .then((resultBook) => {
  //         const result = resultBook
  //         BookHelper.response(res, result, 200)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   },

  //   // POST User
  //   postBook: (req, res) => {
  //     const data = {
  //       name: req.body.name,
  //       writer: req.body.writer,
  //       des: req.body.des,
  //       fk_loc: req.body.fk_loc,
  //       fk_cat: req.body.fk_cat,
  //       image: req.body.image,
  //       created_at: new Date(),
  //       status_borrow: 0

  //     }

  //     bookModels.postBook(data)
  //       .then((resultBook) => {
  //         const result = resultBook[0]
  //         BookHelper.response(res, data, 200)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   },

  //   // Update Book
  //   patchBook: (req, res) => {
  //     const data = {
  //       name: req.body.name,
  //       writer: req.body.writer,
  //       fk_loc: req.body.fk_loc,
  //       fk_cat: req.body.fk_cat,
  //       image: req.body.image,
  //       updated_at: new Date(),
  //     }
  //     const bookid = req.params.bookid

  //     bookModels.patchBook(bookid, data)
  //       .then((resultBook) => {
  //         const result = resultBook[0]
  //         BookHelper.response(res, data, 200)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   },

  //   // Delete User By Id
  //   bookDelete: (req, res) => {
  //     const bookid = req.params.bookid

  //     bookModels.bookDelete(bookid)
  //       .then((resultBook) => {
  //         const result = resultBook
  //         BookHelper.response(res, result, 200)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
}
