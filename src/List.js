import React, {useEffect, useState} from 'react'

function List() {
  const [list, setList] = useState([])

  const show = React.createRef()


  useEffect(() => {
    fetchedData()
  }, [])
  
  const fetchedData = async () => { 
    const response = await fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
    const result = await response.json()
    const filtered = await result.filter(item => item.name)
    
    filtered.sort(function(a,b) {
      if(a.listId === b.listId) {
        let x = parseInt(a.name.split(' ')[1]), y = parseInt(b.name.split(' ')[1]); //name = "Item 684" ["Item", "684"] "684" 684

        return x < y ? -1 : x > y ? 1 : 0
      }
      return a.listId - b.listId
    })
    setList(filtered)
  }

  const showList = (ref) => {
    return () => {
      ref.current.classList.toggle('showlist')
    }
  }

  return (
    <div className="container">
      <div className="item-container">
        <h2>List ID's 1</h2>
          <ul className="item-list">
            {
              list.map(item => {
                if (item.listId == 1) {
                return <li>List ID: {item.listId} Name: {item.name}</li>
                }
              })
            }
          </ul>
      </div>
      <div className="item-container">
        <h2>List ID's 2</h2>
          <ul className="item-list">
            {
              list.map(item => {
                if (item.listId == 2) {
                return <li>List ID: {item.listId} Name: {item.name}</li>
                }
              })
            }
          </ul>
      </div>
      <div className="item-container">
        <h2>List ID's 3</h2>
          <ul className="item-list">
            {
              list.map(item => {
                if (item.listId == 3) {
                return <li>List ID: {item.listId} Name: {item.name}</li>
                }
              })
            }
          </ul>
      </div>
      <div className="item-container">
        <h2>List ID's 4</h2>
          <ul className="item-list">
            {
              list.map(item => {
                if (item.listId == 4) {
                return <li>List ID: {item.listId} Name: {item.name}</li>
                }
              })
            }
          </ul>
      </div>
    </div>
  )
}

export default List
