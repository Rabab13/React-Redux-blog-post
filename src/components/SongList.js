import React, {Component} from "react";
import {connect} from 'react-redux'
import {selectSong} from '../actions'

class SongList extends Component {

    renderList() {
        return (this.props.songs.map((song)=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                        className="ui violet basic button"
                        onClick={()=> this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        }))
    }
    render() {
        console.log(this.props)
        return (
            <div className='  ui massive divided list'>
                {this.renderList()}
            </div>
        )
    }
}
//mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.
//state here contain all redux store data we need as selectedSong and selectedSongReducer
const mapStateToProps = (state) =>{

    return {songs:state.songs}
}
export default connect(mapStateToProps,{selectSong})(SongList);