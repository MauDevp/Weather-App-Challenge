import { UserCard } from "../../molecules"
import "./homeUsers.css"

export const HomeUsers = () => {
    return (
        <div className="homeUsers-container">
            <section className="homeUsers-TextContainer">
                <h1 className="headline1">Usuarios registrados</h1>
                <span className="body">Lorem ipsum dolor sit amet consectetur. Maecenas mauris massa magnis magna adipiscing proin. Vulputate facilisi ornare blandit eu eleifend at.</span>
            </section>
            <section className="homeUsers-CarsContainer">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </section>
        </div>
    )
}