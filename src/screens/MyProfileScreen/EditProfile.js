const EditProfile = ({
                         user =
                             {username: "Dummy", firstName: "Harry", lastName: "Potter", phone: "123456"},
                         inputOnChangeHandler, saveOnClickHandler
                     }) => {
    return (
        <div>
            <label className={"form-label"}>
                Username:
                <input className={"form-control"} type={"text"} value={user.username ? user.username : ""}
                       onChange={(e) => inputOnChangeHandler(e, "username")}/>
            </label>
            <label className={"form-label"}>
                First Name:
                <input className={"form-control"} type={"text"} value={user.firstName ? user.firstName : ""}
                       onChange={(e) => inputOnChangeHandler(e, "firstName")}/>
            </label>
            <label className={"form-label"}>
                Last Name:
                <input className={"form-control"} type={"text"} value={user.lastName ? user.lastName : ""}
                       onChange={(e) => inputOnChangeHandler(e, "lastName")}/>
            </label>
            <label className={"form-label"}>
                Phone:
                <input className={"form-control"} type={"text"} value={user.phone ? user.phone : ""}
                       onChange={(e) => inputOnChangeHandler(e, "phone")}/>
            </label>
            <button className={"btn btn-primary"} onClick={saveOnClickHandler}>Save</button>
        </div>
    )
};
export default EditProfile;