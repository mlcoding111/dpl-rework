import React from 'react'
import ContactCard from './ContactCard'

import { Container, Row } from 'react-bootstrap'
const ContactCardList = () => {
    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center">
                    <ContactCard city="Montreal, Québec" name="Vanessa Roy Cardinal" number="819-446-1694 " mail="Dplacroix@outlook.com" role="Directrice" avatarSrc="https://www.bootdey.com/img/Content/user_2.jpg"/>
                    <ContactCard city="Montreal, Québec" name="Yann Lacroix" number="819-993-8686" mail="Dplacroix@outlook.com" role="Directeur" avatarSrc="https://www.bootdey.com/img/Content/user_1.jpg"/>
                    {/* <ContactCard city="Rouyn-Noranda, Québec" name="Michael Lacroix" number="Unknown" mail="kennycodes@hotmail.com"/> */}
                </Row>
            </Container>
        </>
    )
}

export default ContactCardList
