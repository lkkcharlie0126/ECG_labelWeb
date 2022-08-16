import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
// import {NavigateNext} from '@styled-icons/material/NavigateNext'
// import {NavigateBefore} from '@styled-icons/material/NavigateBefore'
import {ArrowRightCircleFill} from '@styled-icons/bootstrap/ArrowRightCircleFill'
import {ArrowLeftCircleFill} from '@styled-icons/bootstrap/ArrowLeftCircleFill'
import {CloseO} from '@styled-icons/evil/CloseO'

import RegionSelect from "react-region-select";

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


const DivDisease = styled.div({
    position: 'relative',
    // paddingBottom: '10%',
    width: '100%',
    height:'50px',
    // border: '1px solid',
    margin: '10px auto',
    textAlign: 'center',
});

const DiseaseBox = styled.div`
    position: absolute;
    top: 10%;
    left: ${props => props.left};
    right: ${props => props.right};
    width: 10%;
    border: 2px solid;
    margin: 5px auto;
    text-align: center;
    font-size: 2vw;
    border-radius: 20%;
    border-color: ${props => props.borderColor};
    background-color: ${props => props.backgroundColor};
    :hover {
        cursor: pointer;
    }
`

const DivTextBig = styled.div({
    position: 'relative',
    
    // paddingBottom: '10%',
    width: '100%',
    height:'150px',
    // border: '1px solid',
    margin: '10px auto',
    textAlign: 'center',
});

const Divv = styled.div`
    position: 'relative';
    width: 85%;
    height: 300px;
    ${'' /* padding-bottom: 32%; */}
    border: 1px solid;
    background-color: grey;
    margin: 20px auto 20px auto;
    :hover {
        cursor: crosshair;
    }
`

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
const Closebutton = styled(CloseO)`
    margin: 0 0;
    :hover {
            cursor: pointer;
        }
`

const PrevButton = styled(ArrowLeftCircleFill)`
  color: #F4C7AB;
  width: 8%;
  margin: 0 10px ;
  :hover {
        cursor: pointer;
    }
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
  :hover {
        cursor: pointer;
    }
`
// =========================================================================================================
class BeatsUpdate extends Component {
    constructor(props) {
        super(props);
        this.escFunction = this.escFunction.bind(this);
        

        this.state = {
            id: 's100_19_7.png',
            beatIndex: 0,
            allbeats: '',
            file_index: 0,
            file_name: 's100_19_7.png',
            subject_num: '',
            win_num: '',
            beat_num: 'loading...',
            labeler: '',
            label: '',
            labelArray: [],
            isFetching: true,
            originalLabel: 'APC',
            doctorLabel: '',
            allBeatsNumber: 100,
            regions: [
                // {
                //   x: 9.565217391304348,
                //   y: 34.195402298850574,
                //   width: 81.30434782608695,
                //   height: 6.3218390804597675,
                //   new: false,
                //   data: { index: 0 },
                //   isChanging: false
                // },
              ],
            clickableRegions: [
            {
                x: 9.565217391304348,
                y: 34.195402298850574,
                width: 81.30434782608695,
                height: 6.3218390804597675,
                new: false,
                data: { index: 0 },
                isChanging: false
            }
            ]
        };
        
    }
      //=================================================================================================================================

    onChange = regions => {
        // var mapregion = this.state.regions.map(function(item){
        //     return item
        //     // return [item.x, item.y, item.width, item.height, item.data]
        // })
        console.log("​mapregion", this.state.regions);
        // console.log("​App -> onChange -> regions", regions);

        this.setState({
          regions: regions
        });
      };
    changeRegionData(index, event) {
    // console.log("​App -> changeRegionData -> index", index);
    const region = this.state.regions[index];
    // console.log(
    //     "​App -> changeRegionData -> this.state.regions",
    //     this.state.regions
    // );
    let color;
    switch (event.target.value) {
        case "1":
        color = "rgba(255, 0, 0, 0.1)";
        break;
        case "2":
        color = "rgba(0, 0, 255, 0.1)";
        break;
        case "3":
        color = "rgba(0, 255, 0, 0.1)";
        break;
        default:
        color = "rgba(0, 0, 0, 0.1)";
    }

    region.data.regionStyle = {
        background: color
    };

    this.onChange([
        ...this.state.regions.slice(0, index),
        Object.assign({}, region, {
        data: Object.assign({}, region.data, { dataType: event.target.value })
        }),
        ...this.state.regions.slice(index + 1)
    ]);
    }

    actionDeleteRegion = regionIdx => {
    console.log("​regionIdx", regionIdx);
    const filteredRegion = this.state.regions.filter(
        reg => reg.data.index !== regionIdx
    );
    this.setState({ regions: filteredRegion });
    };

    regionRenderer = regionProps => {
    if (!regionProps.isChanging) {
        console.log("​regionRenderer -> regionProps", regionProps);
        return (
        <div>
            <div style={{ position: "absolute", right: '-10px', top: "-27px"}}>
            <Closebutton onClick={() => this.actionDeleteRegion(regionProps.data.index)} width='25px'></Closebutton>
            </div>

            <div style={{ position: "absolute", right: 0, bottom: "-30px" }}>
            <select
                onChange={event =>
                this.changeRegionData(regionProps.index, event)
                }
                value={regionProps.data.dataType}
            >
                <option value="1">SR</option>
                <option value="2">APC</option>
                <option value="3">VPC</option>
            </select>
            {/* <button onClick={this.actionAddRegion}>Save</button> */}
            </div>
        </div>
        );
    }
    };

    actionAddRegion = () => {
    alert("actionAddRegion");
    };

    renderClickableRegions() {
    const { regions } = this.state;
    return regions.map(c => (
        <a href="https://www.danaruma.com">
        <div
            style={{
            position: "absolute",
            width: `${c.width}%`,
            height: '100%',
            top: `${c.y}%`,
            left: `${c.x}%`,
            background: "rgba(0, 0, 255, 0.5)"
            }}
        />
        </a>
    ));
    }

    renderLiveDemo = () => (
    <React.Fragment>
        <img
        src="https://f1-styx.imgix.net/danaruma/homepage/benefit.jpg?w=1000&h=1500&fit=crop&crop=top"
        width="100%"
        />
        {this.renderClickableRegions()}
    </React.Fragment>
    );

      //=================================================================================================================================

    
    

    escFunction(event){
        if((event.keyCode === 39) & (this.state.beatIndex !== (this.state.allBeatsNumber-1))){
            this.handleUpdateBeat(2);
        } else if ((event.keyCode === 37) & (this.state.beatIndex !== 0)) {
            this.handleUpdateBeat(0);
        } else if (event.keyCode === 13) {
            this.handleUpdateBeat(1);
        }
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
        var { id, file_index, file_name, subject_num, win_num, beat_num, labeler , label, labelArray, beatIndex, originalLabel, doctorLabel, regions} = this.state
        const payload = { file_index, file_name, subject_num, win_num, beat_num, labeler, label, labelArray, originalLabel, doctorLabel, regions}

        await api.updateBeat(id, payload).then(res => {
            if (alertFlag === 1){
                window.alert(`Beat updated successfully`)
            }
        })

        const name = 'default';
        const lastEditIndex = beatIndex;
        const payloadUser = {name, lastEditIndex}
        await api.updateUser('00000', payloadUser).then(res => {})

        if (alertFlag === 0) {
            beatIndex = beatIndex - 1;
        } else if ((alertFlag === 2)){
            beatIndex = beatIndex + 1;
        }
        
        const Beat = await api.getBeatByIndex(beatIndex);
        const beat = Beat.data.data;
        this.setState({
            beatIndex: beatIndex,
            id: beat._id,
            file_index: beat.file_index,
            file_name: beat.file_name,
            subject_num: beat.subject_num,
            win_num: beat.win_num,
            beat_num: beat.beat_num,
            label: beat.label,
            labelArray: beat.labelArray,
            labeler: beat.labeler,
            originalLabel: beat.originalLabel,
            doctorLabel: beat.doctorLabel,
            regions: beat.regions,
        })
    }

    handleBoxClicked = async (number) => {

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
    }

    handleDiseaseClicked = async (diseaseclass) => {
        this.setState({
            doctorLabel: diseaseclass,
        })
    }

    componentDidMount = async () => {
        const user = await api.getUserById('00000');
        const beatIndex = user.data.data.lastEditIndex;
        // console.log(beatIndex)
        
        const Beats = await api.getBeatByIndex(beatIndex);
        const beats = Beats.data.data;
        // console.log(beats);

        const allBeatsNumber = await api.getAllnumber();
        // console.log(allBeatsNumber.data.data)

        this.setState({
            beatIndex: beatIndex,
            id: beats._id,
            file_index: beats.file_index,
            file_name: beats.file_name,
            subject_num: beats.subject_num,
            win_num: beats.win_num,
            beat_num: beats.beat_num,
            labeler: beats.labeler,
            label: beats.label,
            labelArray: beats.labelArray,
            isFetching: false,
            originalLabel: beats.originalLabel,
            doctorLabel: beats.doctorLabel,
            allBeatsNumber: allBeatsNumber.data.data,
            regions: beats.regions,
        })
        document.addEventListener("keydown", this.escFunction, false);
    }
    
    
// ==============================================================================================================================
    render() {
        const { subject_num, win_num, beat_num, labeler, file_name, labelArray, originalLabel, beatIndex, allBeatsNumber} = this.state

        const regionStyle = {
            background: "rgba(255, 0, 0, 0.1)"
          };

        return (
            
            <Wrapper>
                <DivTextBig>
                    <DivText left='0%' right='80%'>
                        <Label>Subject</Label>
                        <h3>{subject_num}</h3>
                    </DivText>
                    <DivText left='40%' right='40%'>
                        <Label>Win</Label>
                        <h3>{win_num}</h3>
                    </DivText>
                    <DivText left='80%' right='0%'>
                        <Label>Beat</Label>
                        <h3>{beat_num}</h3>
                    </DivText>
                    {/* <DivText left='80%' right='0'>
                        <Label>Labeler</Label>
                        <InputText
                            type="text"
                            value={labeler}
                            onChange={this.handleChangeInputLabeler}
                        />
                    </DivText> */}
                </DivTextBig>

                
                <DivDisease>
                    <DiseaseBox 
                        left='8%' 
                        borderColor={(this.state.originalLabel === 'SR') ? 'red' : 'black'} 
                        backgroundColor={this.state.doctorLabel==='SR' ? '#F4C7AB' : null}
                        onClick={() => this.handleDiseaseClicked('SR')}>SR</DiseaseBox>

                    <DiseaseBox 
                        left='23%' 
                        borderColor={(this.state.originalLabel === 'APC') ? 'red' : 'black'}
                        backgroundColor={this.state.doctorLabel==='APC' ? '#F4C7AB' : null}
                        onClick={() => this.handleDiseaseClicked('APC')}>APC</DiseaseBox>

                    <DiseaseBox 
                        left='38%' 
                        borderColor={(this.state.originalLabel === 'VPC') ? 'red' : 'black'}
                        backgroundColor={this.state.doctorLabel==='VPC' ? '#F4C7AB' : null}
                        onClick={() => this.handleDiseaseClicked('VPC')}>VPC</DiseaseBox>

                    <DiseaseBox 
                        left='53%' 
                        borderColor={(this.state.originalLabel === 'LBBB') ? 'red' : 'black'}
                        backgroundColor={this.state.doctorLabel==='LBBB' ? '#F4C7AB' : null}
                        onClick={() => this.handleDiseaseClicked('LBBB')}>LBBB</DiseaseBox>

                    <DiseaseBox 
                        left='68%' 
                        borderColor={(this.state.originalLabel === 'RBBB') ? 'red' : 'black'}
                        backgroundColor={this.state.doctorLabel==='RBBB' ? '#F4C7AB' : null}
                        cursor='pointer'
                        onClick={() => this.handleDiseaseClicked('RBBB')}>RBBB</DiseaseBox>

                    <DiseaseBox 
                        left='83%' 
                        borderColor={(this.state.originalLabel === 'Others') ? 'red' : 'black'}
                        backgroundColor={this.state.doctorLabel==='Others' ? '#F4C7AB' : null}
                        onClick={() => this.handleDiseaseClicked('Others')}>Others</DiseaseBox>
                </DivDisease>
                <Divv>
                    <RegionSelect
                        regions={this.state.regions}
                        regionStyle={regionStyle}
                        constraint
                        onChange={this.onChange}
                        regionRenderer={this.regionRenderer}
                        style={{ width: "100%", height:"100%" }}
                        >
                        <img
                            src={require('../img_folder/' + originalLabel +'/' + file_name)} alt={"ECG beat"}
                            width="100%"
                            height="100%"
                        />
                        {/* </div> */}
                        {/* {this.renderClickableRegions()} */}
                    </RegionSelect>
                </Divv>
                
                <DivButton>
                    {beatIndex === 0 
                        ? null
                        : <PrevButton onClick={() => this.handleUpdateBeat(0)}>Previous</PrevButton>
                    }
                    <Button onClick={() => this.handleUpdateBeat(1)}>Update Beat</Button>
                    {beatIndex === (allBeatsNumber-1)
                        ? null
                        : <NextButton onClick={() => this.handleUpdateBeat(2)} >Next</NextButton>
                    }
                </DivButton>
            </Wrapper>
        )
    }
}

export default BeatsUpdate