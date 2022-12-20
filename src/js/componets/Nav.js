import React from "react"

export const Nav = ({favorite , setFavorite}) => {
    return (
        <div className="nav">
				<div className="imgDiv">
					<img className="logo" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="logo" />
				</div>
				<div class="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="counter"> <strong>{favorite.length}</strong> </span>
					</button>
					<ul className="dropdown-menu">
						{favorite.map((list, index) => {
							list = [...favorite]
							//console.log(list, 'list')
							return (
								<div className='list' key={index}>
									<li >{list[index]}</li>
									<div className="delete" onClick={() => {
										let myArray = [...list]
										myArray.splice(index, 1)
										setFavorite(myArray)
									}}>
										<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="lightgrey" class="bi bi-x" viewBox="0 0 16 16">
											<path className="x" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
										</svg>

									</div>
								</div>
							)
						})}
					</ul>
				</div>
			</div>
    )
}