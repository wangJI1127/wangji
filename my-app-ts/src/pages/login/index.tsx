import React, {FormEvent, FormEventHandler} from "react";

export const LoginPage = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        //阻止表单的默认提交
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        console.log(username);
    }

    /**
     * htmlFor 代表 html中的for属性
     * className 代表 html中的class属性
     */
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor={'username'}>用户名</label>
            <input type="text" id={'username'}/>
        </div>
        <div>
            <label htmlFor={'password'}>密码</label>
            <input type="password" id={'password'}/>
        </div>
        <div>
            <button type={'submit'}>login</button>
        </div>
    </form>
}
