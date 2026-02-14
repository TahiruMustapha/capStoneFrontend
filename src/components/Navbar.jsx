export default function Navbar({ onOpen, onSearch }) {
    const handleSearchChange = (event) => {
      onSearch(event.target.value);
    };
    return (
      <>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            {/* -- drop down <div></div> */}
            {/* ++ logo */}
            <a className="btn btn-ghost text-xl">Client Management</a>
            {/* ++ search input */}
          </div>
          <div className="navbar-center">
            <div className="form-control">
              {/* w-48 */}
              <input
                onChange={(e) => handleSearchChange(e)}
                type="text"
                placeholder="Search"
                className=" input input-bordered w-48 md:w-auto"
              />
            </div>
          </div>
          <div className="navbar-end">
            {/* -- svg burrnos divs */}
            {/* ++ add modal on clcik button  */}
  
            <button onClick={onOpen} className="btn btn-primary">
              Add a Client
            </button>
          </div>
        </div>
      </>
    );
  }
  
