
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch();

    const btnHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())
            })
    }

    return (
        <button
            className='inline-block px-6 py-2 font-regular text-xl duration-200 hover:bg-blue-200 rounded-full'
            onClick={btnHandler}
        >LogoutBtn
        </button>
    )
}

export default LogoutBtn