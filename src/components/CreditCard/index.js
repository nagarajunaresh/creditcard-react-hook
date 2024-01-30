// CreditCardForm.js
import {useState} from 'react'
import {
  CreditCardFormContainer,
  CreditCardBox,
  CreditCard,
  Heading,
  CreditCardContainer,
  CreditCardNumber,
  NameText,
  CreditCardName,
  InputBox,
  CardForm,
  FormLabel,
  FormInput,
} from './styledComponents'

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const handleCardNumberChange = e => {
    setCardNumber(e.target.value.replace(/\D/g, '').substring(0, 16))
  }

  const handleCardNameChange = e => {
    setCardName(e.target.value)
  }

  return (
    <CreditCardFormContainer>
      <CreditCardBox>
        <CreditCard>
          <Heading>CREDIT CARD</Heading>
          <CreditCardContainer data-testid=" creditCard">
            <CreditCardNumber>{cardNumber}</CreditCardNumber>
            <NameText>CARDHOLDER NAME</NameText>
            <CreditCardName>{cardName.toUpperCase()}</CreditCardName>
          </CreditCardContainer>
        </CreditCard>
      </CreditCardBox>
      <InputBox>
        <CardForm>
          <Heading>Payment Method</Heading>
          <FormLabel>
            <FormInput
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Card Number"
              maxLength="16"
            />
          </FormLabel>
          <FormLabel>
            <FormInput
              type="text"
              value={cardName}
              onChange={handleCardNameChange}
              placeholder="Cardholder Name"
            />
          </FormLabel>
        </CardForm>
      </InputBox>
    </CreditCardFormContainer>
  )
}

export default CreditCardForm
