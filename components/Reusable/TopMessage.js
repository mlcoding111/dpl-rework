import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../layout.module.css'

const TopMessage = () => {
    return (
        <div className={styles.topBarWrapper}>
                <Row>
                    <Col md="12" className={styles.topBar}>
                        {/* <span className="itemcenter">INFO COVID</span> */}
                        <span className="itemright">RBQ: 8456-127-8564</span>
                    </Col>
                    {/* <Col md={4}>First but last</Col>
                    <Col md={{span: 4}}>Second but first</Col> */}
                </Row>
        </div>
    )
}

export default TopMessage
