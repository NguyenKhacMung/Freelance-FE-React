
export const ErrorUser = ({ error }) => {
  return (
    // <div className='alert alert-danger mt-2' role='alert'>
    //   {error} !
    // </div>
    <div className='invalid-feedback d-block mt-0'>{error}</div>
  )
}
