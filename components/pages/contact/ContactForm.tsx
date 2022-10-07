import { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";
import React from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from './ContactForm.module.scss';

export default function ContactForm() {

    const axiosConfig: AxiosRequestConfig = {
        url: 'https://formspree.io/f/xzbwzjyb',
        method: 'POST'
    };
    const [{ loading, error }, sendRequest] = useAxios(axiosConfig, {manual: true});

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = document.querySelector('form');
        if (form === null) {
            return;
        }

        // TODO
        const payload = {} as any;
        const formData = new FormData(form);
        formData.forEach((value, key) => {
            payload[key] = value;
        });
        sendRequest({data: payload});
    }

    const spinner = (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
    );

    return (
        <Form onSubmit={onSubmit} action="javascript:void(0);">
            <Form.Group className={"mb-3 form-group required"}>
                <Form.Label>Adresse Mail</Form.Label>
                <Form.Control required id="email" type="email" name="email" placeholder="Veuillez entrer votre adresse mail" />
            </Form.Group>
            
            <Form.Group className="mb-3 form-group required">
                <Form.Label>Objet</Form.Label>
                <Form.Control required id="subject" name="subject" placeholder="Veuillez entrer un objet" />
            </Form.Group>

            <Form.Group className="mb-3 form-group required">
                <Form.Label>Message</Form.Label>
                <Form.Control required as="textarea" rows={3} id="message" name="message" placeholder="Veuillez entrer votre message" />
            </Form.Group>
            <div className="d-grid">
                <Button type="submit" disabled={loading} className={styles.button}>
                    {loading ? <>{spinner} Envoi...</> : 'Envoyer'}
                </Button>
            </div>
        </Form>
    );
}
