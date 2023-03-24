import React from 'react'

import Button from '@mui/material/Button';

const styles = {
  primaryBackgroundColor: {
    backgroundColor: 'rgb(103, 58, 183)', 
  },
  formHeader: {
    padding: '30px 15px'
  },
  formCard: {
    backgroundColor: '#fff',
    width: '100%', 
    padding: '22px 24px',
    borderRadius: '.5em',
  },
  formHeaderTopCard: {
    backgroundColor: '#fff', 
    borderRadius: '0 0 .5em .5em',
  },
  formSubCard: {
    padding: '22px 24px',
  },
  marBtm20: {
    marginBottom: '20px'
  },
  marTop20: {
    marginTop: '20px'
  },
  formInput: {
    width: '100%',
  },
  formHeaderBar: {
    width: '100%', 
    backgroundColor: 'rgb(103, 58, 183)', 
    borderRadius: '.5em .5em 0 0', 
    padding: '.3em', 
    color: '#fff'
  }
}

const steps = ['Select campaign settings', 'Create an ad group', 'Criteria'];

export default function EvaluateForm() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  )
}
