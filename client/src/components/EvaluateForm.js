import React, { useState, useEffect } from 'react';

import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Box,
} from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { width } from '@mui/system';

const steps = ['Select campaign settings', 'Create an ad group'];

const styles = {
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
    padding: '1em', 
    color: '#fff'
  }
}

function EvaluateForm() {
  const [formData, setFormData] = useState({
    evaManager: '',
    resSection: '',
    chefName: '',
    opt1: false,
    opt2: false,
    // email: '',
    // password: '',
    // confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    evaManager: '',
    resSection: '',
    chefName: '',
    opt1: false,
    opt2: false,
    // email: '',
    // password: '',
    // confirmPassword: '',
  });
  const [activeStep, setActiveStep] = useState(0);
   const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
   const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
   const handleFinish = () => {
    alert(JSON.stringify(formData));
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange  = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    const { evaManager, resSection, chefName, email, password, confirmPassword } = formData;
    setErrors({
      evaManager: evaManager.toString().trim() === '' ? 'First name is required' : '',
      resSection: resSection.toString().trim() === '' ? 'Last name is required' : '',
      chefName: chefName.toString().trim() === '' ? 'name is required' : '',
      // email: email.trim() === '' ? 'Email is required' : !/\S+@\S+\.\S+/.test(email) ? 'Email is invalid' : '',
      // password: password.trim() === '' ? 'Password is required' : password.length < 6 ? 'Password must be at least 6 characters' : '',
      // confirmPassword: confirmPassword !== password ? 'Passwords do not match' : '',
    });
  }, [formData]);
   return (  
    <div>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Box style={styles.formHeaderTopCard}>
          <div style={styles.formHeaderBar}></div>
          <Typography variant="h5" style={{...styles.formSubCard}}>Copy of Evaluation form</Typography>
          <Stepper activeStep={activeStep} style={{...styles.formHeader, ...styles.formSubCard}}>
            {steps.map((label) => (
              <Step key={label} style={{paddingBottom: "20px"}}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item style={{width: '100%'}}>
            {activeStep === 0 && (
              <Box style={styles.marTop20}>
                <Typography variant="h6">Step 1</Typography>
                <Box style={{ ...styles.formCard, ...styles.marBtm20 }}>
                  <Typography bold marginBottom='20px'>Evaluation manager</Typography>
                  <FormControl fullWidth>
                    <InputLabel error={errors.evaManager !== ''} id="demo-simple-select-label">Evaluation manager</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.evaManager}
                      name="evaManager"
                      label="Evaluation manager"
                      onChange={handleInputChange}
                      error={errors.evaManager !== ''}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box style={styles.formCard}>
                  <Typography bold marginBottom={'20px'}>Restaurant section</Typography>
                  <FormControl fullWidth>
                    <InputLabel error={errors.resSection !== ''} id="demo-simple-select-label">Restaurant section</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="resSection"
                      value={formData.resSection}
                      label="Restaurant section"
                      onChange={handleInputChange}
                      error={errors.resSection !== ''}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            )}
            {activeStep === 1 && (
              <>
                <Box>
                  <div style={{...styles.formHeaderBar, ...styles.marTop20,}}>Chefs</div>
                  <Box style={{ ...styles.formCard, ...styles.marBtm20, ...styles.formHeaderTopCard }}>
                    <Typography bold marginBottom={'20px'}>Chef Name</Typography>
                    <FormControl fullWidth>
                      <InputLabel error={errors.chefName !== ''} id="demo-simple-select-label">Chef Name</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.chefName}
                        name="chefName"
                        label="Chef Name"
                        onChange={handleInputChange}
                        error={errors.chefName !== ''}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Box style={{...styles.formCard, ...styles.marBtm20}}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox name="opt1" checked={formData.opt1} onChange={handleCheckboxChange} />} label="Option 1" />
                  </FormGroup>
                </Box>
                <Box style={styles.formCard}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox name="opt2" checked={formData.opt2} onChange={handleCheckboxChange} />} label="Option 2" />
                  </FormGroup>
                </Box>
              </>
            )}
            {activeStep === 2 && (
              <>
                {/* <Typography variant="h6">Step 3</Typography>
                <TextField 
                  label="First Name" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleInputChange} 
                  error={errors.firstName !== ''} 
                  helperText={errors.firstName} 
                /> */}
              </>
            )}
          </Grid>
          <Grid item xs={12}>
            {activeStep === 0 && (
              <Button
              variant="contained"
              color="primary"
              onClick={ handleNext }
              style={{margin: 'auto', marginLeft: '0px'}}>
                Next
              </Button>
            )}
            {activeStep === 1 && (
              <>
                <Button
                variant="contained"
                color="primary"
                onClick={ handleFinish }
                style={{margin: 'auto', marginLeft: '0px'}}>
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleBack}
                  sx={{ marginLeft: 8 }}
                >
                  Back
                </Button>
              </>
            )}
            {activeStep === 2 && (
              <>
                <Button
                variant="contained"
                color="primary"
                onClick={ handleFinish }
                style={{margin: 'auto', marginLeft: '0px'}}>
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleBack}
                  sx={{ marginLeft: 8 }}
                >
                  Back
                </Button>
              </>
            )}
            {/* <Button
              variant="contained"
              color="primary"
              onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
              
              // disabled={activeStep === steps.length - 1}
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
            {activeStep > 0 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleBack}
                sx={{ marginLeft: 8 }}
              >
                Back
              </Button>
            )} */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
 export default EvaluateForm;


 {/* <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Step 1</StepLabel>
          <StepContent>
            <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} error={errors.firstName !== ''} helperText={errors.firstName} />
            <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} error={errors.lastName !== ''} helperText={errors.lastName} />
            <Button variant="contained" color="primary" onClick={handleNext} disabled={errors.firstName !== '' || errors.lastName !== ''}>
              Next
            </Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
          <StepContent>
            <TextField label="Email" name="email" value={formData.email} onChange={handleInputChange} error={errors.email !== ''} helperText={errors.email} />
            <TextField type="password" label="Password" name="password" value={formData.password} onChange={handleInputChange} error={errors.password !== ''} helperText={errors.password} />
            <TextField type="password" label="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} error={errors.confirmPassword !== ''} helperText={errors.confirmPassword} />
            <Button variant="contained" color="primary" onClick={handleFinish} disabled={errors.email !== '' || errors.password !== '' || errors.confirmPassword !== ''} >
              Finish
            </Button>
            <Button variant="contained" color="secondary" onClick={handleBack}>
              Back
            </Button>
          </StepContent>
        </Step>
      </Stepper> */}