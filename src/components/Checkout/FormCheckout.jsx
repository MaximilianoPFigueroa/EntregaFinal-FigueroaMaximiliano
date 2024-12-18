import React from 'react'

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <form onSubmit={handleSubmitForm}>
            <div>
                <label>Nombre completo: </label>
                <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} required />
            </div>
            <div>
                <label>Contacto</label>
                <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} required />
            </div>
            <div>
                <label>Repetir email</label>
                <input type="email" name="repeatEmail" value={dataForm.repeatEmail} onChange={handleChangeInput} required />
            </div>



            <button type="submit">Enviar orden</button>
        </form>
    )
}

export default FormCheckout