import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <div className=" pb-5 min-vh-100 testBg myPadding">
      <div className="container">
        <div className="container SignUpBg  rounded-5  ">
          <div className="row ">
            <div className="p-5">
              <div className="SupportForm">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-4xl mb-4 font-semibold tracking-tight text-balance sm:text-5xl ">
                    Create Account
                  </h2>
                </div>
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
