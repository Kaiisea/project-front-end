import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewMember } from "../../store/loginSlice";
import Spinner from "../spinner/Spinner";
import { Navigate } from "react-router-dom"

export function MemberRegister() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  const loading = useSelector((state) => state.login.login.loading);
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    twitch_username: "",
    pronouns: "",
    phone: "",
    birth_day: "",
    birth_month: "",
    birth_year: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewMember(data)).then(() => {
      setData({
        first_name: "",
        last_name: "",
        twitch_username: "",
        pronouns: "",
        phone: "",
        birth_day: "",
        birth_month: "",
        birth_year: "",
      });
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div>
      {loading && <Spinner />}
      {status === "succeeded" && <Navigate to="/login" replace={true} />}
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.formH1}>Join us, little Porocornio!</h1>
        <div className={classes.divDoubleInput}>
          <input
            id="first_name"
            type="first_name"
            name="first_name"
            placeholder="Name"
            value={data.first_name}
            required
            className={`${classes.field} ${classes.formSpacingRegister} ${classes.doubleInputOne}`}
            onChange={handleChange}
          />
          <input
            id="last_name"
            type="last_name"
            name="last_name"
            placeholder="Last name"
            value={data.last_name}
            required
            className={`${classes.field} ${classes.formSpacingRegister} ${classes.doubleInputTwo}`}
            onChange={handleChange}
          />
        </div>
        <div className={classes.divDoubleInput}>
          <input
            id="twitch_username"
            type="twitch_username"
            name="twitch_username"
            placeholder="User name"
            value={data.twitch_username}
            required
            className={`${classes.field} ${classes.formSpacingRegister} ${classes.doubleInputThree}`}
            onChange={handleChange}
          />
          <select
            id="pronouns"
            typpee="pronouns"
            name="pronouns"
            value={data.pronouns}
            required
            className={classes.selectForm}
            onChange={handleChange}
          >
            <option value="he" className={classes.initialOptionForm}>
              Choose your pronouns
            </option>
            <option value="she" className={classes.optionForm}>
              She/her
            </option>
            <option value="he" className={classes.optionForm}>
              He/him
            </option>
            <option value="they" className={classes.optionForm}>
              They/them
            </option>
            <option value="sheTHey" className={classes.optionForm}>
              She/they
            </option>
            <option value="heThey" className={classes.optionForm}>
              He/they
            </option>
            <option value="ze" className={classes.optionForm}>
              {" "}
              Ze/zem
            </option>
            <option value="it" className={classes.optionForm}>
              It/its
            </option>
            <option value="xe" className={classes.optionForm}>
              Xe/xem
            </option>
            <option value="nonConforming" className={classes.optionForm}>
              Pronouns Non-conforming
            </option>
          </select>
        </div>
        <input
          id="phone"
          type="phone"
          name="phone"
          placeholder="Telephone number"
          value={data.phone}
          required
          className={`${classes.field} ${classes.formSpacingRegister}`}
          onChange={handleChange}
        />
        <h3 className={`${classes.registerH3} ${classes.h3Spacing}`}>
          Choose your birth date
        </h3>
        <div className={classes.birthDiv}>
          <select
            id="birth_day"
            name="birth_day"
            type="birth_day"
            value={data.birth_day}
            required
            className={classes.birthOption}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select
            id="birth_month"
            name="birth_month"
            type="birth_month"
            value={data.birth_month}
            required
            className={classes.birthOption}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
            id="birth_year"
            name="birth_year"
            type="birth_year"
            value={data.birth_year}
            required
            className={`${classes.birthOption} ${classes.birthOptionYear}`}
            onChange={handleChange}
          >
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            <option value="1989">1989</option>
            <option value="1988">1988</option>
            <option value="1987">1987</option>
            <option value="1986">1986</option>
            <option value="1985">1985</option>
            <option value="1984">1984</option>
            <option value="1983">1983</option>
            <option value="1982">1982</option>
            <option value="1981">1981</option>
            <option value="1980">1980</option>
            <option value="1979">1979</option>
            <option value="1978">1978</option>
            <option value="1977">1977</option>
            <option value="1976">1976</option>
            <option value="1975">1975</option>
            <option value="1974">1974</option>
            <option value="1973">1973</option>
            <option value="1972">1972</option>
            <option value="1971">1971</option>
            <option value="1970">1970</option>
            <option value="1969">1969</option>
            <option value="1968">1968</option>
            <option value="1967">1967</option>
            <option value="1966">1966</option>
            <option value="1965">1965</option>
            <option value="1964">1964</option>
            <option value="1963">1963</option>
            <option value="1962">1962</option>
            <option value="1961">1961</option>
            <option value="1960">1960</option>
            <option value="1959">1959</option>
            <option value="1958">1958</option>
            <option value="1957">1957</option>
            <option value="1956">1956</option>
            <option value="1955">1955</option>
            <option value="1954">1954</option>
            <option value="1953">1953</option>
            <option value="1952">1952</option>
            <option value="1951">1951</option>
            <option value="1950">1950</option>
          </select>
        </div>
        <div className={classes.buttonDiv}>
          <Link to="/login">
            <button
              type="submit"
              className={`${classes.button} ${classes.buttonRegister}`}
            >
              B A C K &nbsp;T O &nbsp;L O G I N
            </button>
          </Link>
          <button
            type="submit"
            className={`${classes.button} ${classes.buttonRegistering}`}
          >
            R E G I S T E R
          </button>
        </div>
      </form>
    </div>
  );
}
