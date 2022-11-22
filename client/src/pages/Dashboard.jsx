import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { posts, isLoading, isError, message } = useSelector(
        (state) => state.posts
    )

    useEffect(() => {

        if (isError) {
            console.log(message);
        }

    }, [navigate, isError, message, dispatch])

    return (
        <>
            <section className="heading">Λαμιώτικες αγγελίες</section>
        </>
    )
}

export default Dashboard;