import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``


class Links extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '00000',
            beatIndex: 10,
            beats: '118m_10.png'
        };
        
    }
    componentDidMount = async () => {
        // const { id } = this.state
        // const user = await api.getUserById(id)
        

        // this.setState({
        //     beatIndex: user.data.data.lastEditBeat,
        // })

        // await api.getBeats().then(beats => {
        //     this.setState({
        //         beats: beats.data.data[this.state.beatIndex]._id,
        //     })
        // })
    }

    render() {
        // const {lastEditSubject, lastEditBeat, beats} = this.state
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    ECG Feature Labeler
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to={"/beats/update/" } className="nav-link">
                                Label Beat
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/beats/list" className="nav-link">
                                List Beats
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links