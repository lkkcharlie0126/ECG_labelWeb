import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'
import 'react-table/react-table.css' 

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`
class UpdateBeat extends Component {
    updateUser = async event => {
        
        const name = 'default';
        const lastEditIndex = this.props.index;
        const payloadUser = {name, lastEditIndex}
        await api.updateUser('00000', payloadUser).then(res => {})
        // event.preventDefault()
        // alert('wait');
        window.location.href = `/beats/update/`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class BeatsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beats: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getBeats().then(beats => {
            this.setState({
                beats: beats.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { beats, isLoading } = this.state
        // console.log('TCL: MoviesList -> render -> movies', beats)

        const columns = [
            {
                Header: 'Subject',
                accessor: 'subject_num',
                filterable: true,
            },
            {
                Header: 'Window',
                accessor: 'win_num',
                filterable: true,
            },
            {
                Header: 'Beat number',
                accessor: 'beat_num',
                filterable: true,
            },
            {
                Header: 'MITBIH label',
                accessor: 'originalLabel',
                filterable: true,
            },
            {
                Header: 'Relabel',
                accessor: 'doctorLabel',
                filterable: true,
            },
            {
                Header: 'Index',
                accessor: 'file_index',
                filterable: true,
            },
            {
                Header: 'Labeler',
                accessor: 'labeler',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateBeat index={props.original.file_index} />
                        </span>
                    )
                },
            },

            // {
            //     Header: 'Time',
            //     accessor: 'updatedAT',
            //     // Cell: props => <span>{props.value.join(' / ')}</span>,
            // },
        ]

        let showTable = true
        if (!beats.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={beats}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default BeatsList