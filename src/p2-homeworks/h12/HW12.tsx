import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector((store:AppStoreType) => store.theme.theme); // useSelector

    // useDispatch, onChangeCallback
    const dispatch = useDispatch();

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChangeOption={onChangeCallback} />
            <hr/>
        </div>
    );
}

export default HW12;
