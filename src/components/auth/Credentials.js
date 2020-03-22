import React from 'react';



export default ({ submit, action, allowName = false, loading, error }) => (
  <div className="is-warning ">
    <div className="column is-info is-4 is-offset-4">
      <div className="box animated fadeIn is-warning" >
        <form onSubmit={e => {
          e.preventDefault();
          const { elements } = e.target;
          const data = action === 'Sign Up' ?
          {
            email: elements.email.value,
            password: elements.password.value,
            firstName: elements.firstName.value,
            lastName: elements.lastName.value,
            roles: ['client']
          } : {
            email: elements.email.value,
            password: elements.password.value
          };
          submit(data);
        }}>
          <h4 className="title has-text-grey">{ allowName ? 'Create an Account' : 'Login' }</h4>
          <p className="subtitle has-text-grey">Please login to proceed.</p>
          { allowName &&
            <div className="field">
              <div className="control">
                <input className="input is-medium" placeholder="First Name" name="firstName"/>
              </div>
            </div>}
            { allowName &&
            <div className="field">
              <div className="control">
                <input className="input is-medium" placeholder="Last Name" name="lastName"/>
              </div>
            </div>}
            <div className="field">
              <div className="control">
              <input className="input is-medium" placeholder="Email" name="email"/>
              </div>
            </div>
            <div className="field">
              <div className="control">
              <input className="input is-medium" placeholder="Password" name="password"/>
              </div>
            </div>
            <div className="field has-text-centered">
              <div className="control has-text-centered">
              { Object.keys(error).length ? <div className="animated fadIn button is-warning is-small ">Authentication Failed</div> : null}
              </div>
            </div>
          <button className={loading ? "button is-loading is-large is-info" : "button is-outlined is-large is-info"}>{action}</button>

        </form>
      </div>
    </div>
  </div>
);
