import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import CategoryItems from './CategoryItems'

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

`
    
const Categories=()=> {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItems item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories;

