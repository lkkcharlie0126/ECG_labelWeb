import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
// import {NavigateNext} from '@styled-icons/material/NavigateNext'
// import {NavigateBefore} from '@styled-icons/material/NavigateBefore'
import {ArrowRightCircleFill} from '@styled-icons/bootstrap/ArrowRightCircleFill'
import {ArrowLeftCircleFill} from '@styled-icons/bootstrap/ArrowLeftCircleFill'


const Wrapper = styled.div.attrs({
    className: 'form-group',
    
})`
    width:90%;
    margin: 0 auto ;
`

const Label = styled.p`
    ${'' /* margin: 5px; */}
    ${'' /* text-align: center; */}
    width: 100%;
    background-color: #B2B8A3;
    border: none;
    margin: 15px 15px 15px 5px;
    padding: 5px 10px;
    border-radius: 15px;
`
const InputText = styled.input`
    margin: 5px auto;
    width: 70%;
    text-align: center;
    ${'' /* border: 1px solid; */}
`

const DivText = styled.div(props => ({
    position: 'absolute',
    top: '10%',
    left: props.left,
    right: props.right,
    // width: '20%',
    // border: '1px solid',
    margin: '5px auto',
    textAlign: 'center',
    fontSize: '2vw',
}));


const DivTextBig = styled.div({
    position: 'relative',
    
    // paddingBottom: '10%',
    width: '100%',
    height:'150px',
    // border: '1px solid',
    margin: '10px auto',
    textAlign: 'center',
});

const Divv = styled.div({
    position: 'relative',
    width: '85%',
    paddingBottom: '32%',
    // border: '1px solid',
    backgroundColor: 'grey',
    margin: '20px auto 20px auto',
}) 

const ECGimg = styled.img({
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
})


const RedBox = styled.div(props => ({
    height: '33.33%',
    width: '33.33%',
    backgroundColor: props.color,
    border: '1px solid red',
    position: 'absolute',
    left: props.left,
    top: props.top,
}));


const DivButton = styled.div({
    position: 'relative',
    width: '100%',
    margin: '10px auto 10px auto',
    textAlign: 'center',
}) 

const Button = styled.button({
    backgroundColor: '#B2B8A3',
    border: 'none',
    margin: '15px 15px 15px 5px',
    padding: '5px 10px',
    borderRadius: '15px',
    left: '30%',
    right: '30%',
})

// const CancelButton = styled.a.attrs({
//     className: `btn btn-danger`,
// })`
//     margin: 15px 15px 15px 5px;
// `

// const PrevButton = styled.a({
//     // className: `btn btn-warning`,
//     webkitAppearance: 'button',
//     mozAppearance: 'button',
//     appearance: 'button',
//     textDecoration: 'none',
//     color: 'initial',
//     backgroundColor: '#F4C7AB',
//     border: 'none',
//     margin: '15px 15px 15px 5px',
//     padding: '5px 10px',
//     borderRadius: '15px',
    
// })
const PrevButton = styled(ArrowLeftCircleFill)`
  color: #F4C7AB;
  width: 8%;
  margin: 0 10px ;
`
// const NextButton = styled.a({
//     webkitAppearance: 'button',
//     mozAppearance: 'button',
//     appearance: 'button',
//     textDecoration: 'none',
//     color: 'initial',
//     backgroundColor: '#F4C7AB',
//     border: 'none',
//     margin: '15px 15px 15px 5px',
//     padding: '5px 10px',
//     borderRadius: '15px',
// })

const NextButton = styled(ArrowRightCircleFill)`
  color: #F4C7AB;
  width: 8%;
`

// ===============================================================================
class BeatsUpdate extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            id: this.props.match.params.id,
            file_index: this.props.match.params.file_index,
            file_name: this.props.match.params.file_name,
            subject_num: 118,
            beat_num: 10,
            labeler: '',
            labelArray: [],
            label: '',
            isFetching: true,
            color1: 'rgba(255, 0, 0, 0)',
            color2: 'rgba(255, 0, 0, 0)', 
            color3: 'rgba(255, 0, 0, 0)',
            color4: 'rgba(255, 0, 0, 0)', 
            color5: 'rgba(255, 0, 0, 0)', 
            color6: 'rgba(255, 0, 0, 0)',
            color7: 'rgba(255, 0, 0, 0)', 
            color8: 'rgba(255, 0, 0, 0)',
            color9: 'rgba(255, 0, 0, 0)',
            beats: '118m_10.png',
            beatsNext: '',
            beatsPrev: '',
            beatIndex: '',
            lastIndex: '',
            nextIndex: '',
            // files: '',
            // lastEditSubject: 0,
            // fileLength: 100,
        };
        
    }

    handleChangeInputLabeler = async event => {
        const labeler = event.target.value
        this.setState({ labeler })
    }

    // handleChangeInputLabel = async event => {
    //     const label = event.target.value
    //     console.log(event)
    //     this.setState({ label })
    // }

    handleUpdateBeat = async (alertFlag) => {
        const { id, file_index, file_name, subject_num, beat_num, labeler , label, labelArray, beatIndex, lastIndex, nextIndex} = this.state
        // const arrayTime = labeler.split('/')
        const payload = { file_index, file_name, subject_num, beat_num, labeler, label, labelArray}

        await api.updateBeat(id, payload).then(res => {
            if (alertFlag === 1){
                window.alert(`Beat updated successfully`)
            }
        })

        const name = 'default';
        const lastEditSubject = subject_num;
        if (alertFlag === 0){
            const lastEditBeat = lastIndex;
            const payloadUser = {name, lastEditSubject, lastEditBeat}
            await api.updateUser('00000', payloadUser).then(res => {})
            window.location.href = `/beats/update/${this.state.beatsPrev}`
        }
        if (alertFlag === 1){
            window.location.href = `/beats/update/${this.state.beats}`
        }
        if (alertFlag === 2){
            const lastEditBeat = nextIndex;
            const payloadUser = {name, lastEditSubject, lastEditBeat}
            await api.updateUser('00000', payloadUser).then(res => {})
            window.location.href = `/beats/update/${this.state.beatsNext}`
        }
        
    }

    handleBoxClicked = async (number) => {
        switch (number){
            case 1:
                this.setState({color1: this.state.color1 === 'rgba(255, 0, 0, 0)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
                break;
            case 2:
                this.setState({color2: this.state.color2 === 'rgba(255, 0, 0, 0)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
                break;
            case 3:
                this.setState({color3: this.state.color3 === 'rgba(255, 0, 0, 0)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
                break;
            case 4:
                this.setState({color4: this.state.color4 === 'rgba(255, 0, 0, 0)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
                break;
            case 5:
                this.setState({color5: this.state.color5 === 'rgba(255, 0, 0, 0)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
                break;
            case 6:
                this.setState({color6: this.state.color6 === 'rgba(255, 0, 0, 0)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
                break;
            case 7:
                this.setState({color7: this.state.color7 === 'rgba(255, 0, 0, 0)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
                break;
            case 8:
                this.setState({color8: this.state.color8 === 'rgba(255, 0, 0, 0)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
                break;
            case 9:
                this.setState({color9: this.state.color9 === 'rgba(255, 0, 0, 0)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
                break;
            default:
                console.log(`Sorry, we are out of ${number}.`);
        }
        
        const newlabelArray = this.state.labelArray;
        const index = await newlabelArray.indexOf(number);

        if (index === -1){
            this.setState({
                labelArray: newlabelArray.concat(number)
            });
        } else{
            newlabelArray.splice(index, 1)
            this.setState({
                labelArray: newlabelArray
            });
        }
        // console.log(this.state.labelArray)
    }

    componentDidMount = async () => {
        const { id } = this.state
        const beat = await api.getBeatById(id)
        const user = await api.getUserById('00000')

        this.setState({
            file_index: beat.data.data.file_index,
            file_name: beat.data.data.file_name,
            subject_num: beat.data.data.subject_num,
            beat_num: beat.data.data.beat_num,
            labeler: beat.data.data.labeler,
            label: beat.data.data.label,
            labelArray: beat.data.data.labelArray,
            isFetching: false,
            beatIndex: user.data.data.lastEditBeat,
            lastIndex: user.data.data.lastEditBeat-1,
            nextIndex: user.data.data.lastEditBeat+1,
            // files: files,
            // lastEditSubject: user.data.data.lastEditSubject,
            // filesLength: files.length,
        })

        await api.getBeats().then(beats => {
            const allbeats = beats.data.data
            this.setState({
                beats: allbeats[this.state.beatIndex]._id,
                beatsNext: allbeats[this.state.beatIndex + 1]._id,
                beatsPrev: allbeats[this.state.beatIndex - 1]._id,
            })
        })
        console.log(this.state.beatIndex);

        this.setState({color1: this.state.labelArray.includes(1) ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
        this.setState({color2: this.state.labelArray.includes(2) ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
        this.setState({color3: this.state.labelArray.includes(3) ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
        
        this.setState({color4: this.state.labelArray.includes(4) ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
        this.setState({color5: this.state.labelArray.includes(5) ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
        this.setState({color6: this.state.labelArray.includes(6) ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
        
        this.setState({color7: this.state.labelArray.includes(7) ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
        this.setState({color8: this.state.labelArray.includes(8) ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
        this.setState({color9: this.state.labelArray.includes(9) ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 0, 0, 0)'});
    }
    
// ==============================================================================================================================
    render() {
        const { subject_num, beat_num, labeler, label, isFetching, beats} = this.state
        // var img_name = subject_num + "m_" + beat_num + ".png";
        // var img_prev = subject_num + "m_" + (beat_num-1) + ".png";
        // var img_next = subject_num + "m_" + (beat_num+1) + ".png";

        var img_name = beats;
        
        return (
            <Wrapper>
                <DivTextBig>
                <DivText left='0%' right='80%'>
                    <Label>Subject</Label>
                    <h3>{subject_num}</h3>
                </DivText>
                <DivText left='40%' right='40%'>
                    <Label>Beat</Label>
                    <h3>{beat_num}</h3>
                </DivText>
                <DivText left='80%' right='0'>
                    <Label>Labeler</Label>
                    <InputText
                        type="text"
                        value={labeler}
                        onChange={this.handleChangeInputLabeler}
                    />
                </DivText>
                </DivTextBig>



                {/* <Label>Label: </Label>
                <InputText
                    type="number"
                    value={label}
                    onChange={this.handleChangeInputLabel}
                /> */}
                <Divv>
                    <ECGimg src={require('../img_folder/' + img_name)} alt={"ECG beat"} />
                    {/* RedBox 3*3 */}
                        <RedBox onClick={() => this.handleBoxClicked(1)} left='0' top='0' color={this.state.color1}/>
                        <RedBox onClick={() => this.handleBoxClicked(2)} left='33.33%' top='0' color={this.state.color2}/>
                        <RedBox onClick={() => this.handleBoxClicked(3)} left='66.66%' top='0' color={this.state.color3}/>

                        <RedBox onClick={() => this.handleBoxClicked(4)} left='0' top='33.33%' color={this.state.color4}/>
                        <RedBox onClick={() => this.handleBoxClicked(5)} left='33.33%' top='33.33%' color={this.state.color5}/>
                        <RedBox onClick={() => this.handleBoxClicked(6)} left='66.66%' top='33.33%' color={this.state.color6}/>

                        <RedBox onClick={() => this.handleBoxClicked(7)} left='0' top='66.66%' color={this.state.color7}/>
                        <RedBox onClick={() => this.handleBoxClicked(8)} left='33.33%' top='66.66%' color={this.state.color8}/>
                        <RedBox onClick={() => this.handleBoxClicked(9)} left='66.66%' top='66.66%' color={this.state.color9}/>
                    {/* RedBox 3*3 */}
                </Divv>
                
                <DivButton>
                    {/* <a href={'/beats/update/' + img_prev}> */}
                        <PrevButton onClick={() => this.handleUpdateBeat(0)}>Previous</PrevButton>
                    {/* </a> */}
                    {/* <a href={'/beats/update/' + img_name}> */}
                        <Button onClick={() => this.handleUpdateBeat(1)}>Update Beat</Button>
                    {/* </a> */}
                    {/* <a href={'/beats/update/' + img_next}> */}
                        <NextButton onClick={() => this.handleUpdateBeat(2)} >Next</NextButton>
                    {/* </a> */}
                </DivButton>
            </Wrapper>
        )
    }
}

export default BeatsUpdate