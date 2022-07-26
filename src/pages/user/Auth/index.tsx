import { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// Hooks
import { useFormState } from '../../../hooks';

// Constants
import { authFormNames } from '../../../constants';

// Helpers
import { handleStateChange, validators } from '../../../helpers';

// Types
import { ISignUpData } from '../../../types/auth';
import { AppDispatch } from '../../../store/configureStore';

// Actions
import { signUp, signIn } from '../../../store/user/user.actions';


const { authFormValidator } = validators;


const Auth = () => {
  const dispatch: AppDispatch = useDispatch();

  const { setFormValues, getValues } = useFormState<ISignUpData>(...authFormNames);

  const [isSignUp, setIsSignUp] = useState(false);

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  } = getValues();


  const handleChange = handleStateChange(setFormValues, authFormValidator);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUp({
        email,
        password,
        firstName,
        lastName,
        confirmPassword
      }));
    } else {
      dispatch(signIn({
        email,
        password,
      }));
    }
  };

  const handleChangeAuthMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };


  return (
    <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="p-3 border border-primary rounded text-primary">
        <Form onSubmit={handleSubmit} style={{maxWidth: 400}}>
          <h2 className="mb-2">Sign {isSignUp ? 'Up' : 'In'}</h2>
          {isSignUp && (
            <Form.Group className="mb-2" controlId="firstName">
              <Form.Label className="text-primary mb-0">First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </Form.Group>
          )}
          {isSignUp && (
            <Form.Group className="mb-2" controlId="lastName">
              <Form.Label className="text-primary mb-0">Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </Form.Group>
          )}
          <Form.Group className="mb-2" controlId="email">
            <Form.Label className="text-primary mb-0">E-mail</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="password">
            <Form.Label className="text-primary mb-0">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>
          {isSignUp && (
            <Form.Group className="mb-2" controlId="confirmPassword">
              <Form.Label className="text-primary mb-0">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                data-dependency={password}
              />
            </Form.Group>
          )}
          <Button type="submit">
            Sign {isSignUp ? 'Up' : 'In'}
          </Button>
        </Form>
      </div>
      <span className="mt-1 text-primary text-decoration-underline" style={{cursor: 'pointer'}} onClick={handleChangeAuthMode}>
        {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
      </span>
    </div>
  );
};

export default Auth;
