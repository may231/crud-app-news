#!/usr/bin/env node
const {db, Event, Article} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

    await Article.create({
        title: 'Weather Updates', 
        image: '',
        publishDate: 12-01-2022, 
        author: 'Jane Jack',
        content: '',
    })

    await Article.create({
        title: 'School Updates', 
        image: '',
        publishDate: 12-01-2022, 
        author: 'Jill German',
        content: '',
    })

    await Article.create({
        title: 'Restaurants', 
        image: '',
        publishDate: 12-01-2022, 
        author: 'Angel Martinez',
        content: '',
    })

    await Article.create({
        title: 'Parks', 
        image: '',
        publishDate: 12-01-2022, 
        author: 'Bob Park',
        content: '',
    })



  await Event.create({
    name: 'Iris Festival',
    image: '',
    date: 2023-12-02,
    description: '',
    address: 'Swan Lake Garden',
  })

  await Event.create({
    name: 'Peach U Pick',
    image: '',
    date: 2023-12-06,
    description: '',
    address: 'McLeod Farms',
  })

  await Event.create({
    name: 'Beach Day',
    image: '',
    date: 2023-07-21,
    description: '',
    address: 'Hilton Head Island',
  })

  await Event.create({
    name: 'Concert',
    image: '',
    date: 2023-11-23,
    description: '',
    address: 'Conway',
  })

  db.close()
  console.log(`

    Seeding successful!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
