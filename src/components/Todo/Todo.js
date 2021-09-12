import React, {Component} from 'react'
import {FaBars, FaEdit, FaPlusCircle, FaSave, FaTrash, FaSun, FaMoon, FaCheck} from 'react-icons/fa';
import Header from '../Header/Header';
import './Todo.css';
import todos from "../../data/todosdata";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: props.todos, typing: '', activeLink: 1, filterTodos: props.todos}
    }

    state = {a: -1, b: true, s: true, d: true, f: true, h: true, idx: "",}
    showHide = (index) => {
        this.setState((state) => {
            if (state.a != index) return {a: index}
            else return {a: -1}
        })
    }

    changed = (event) => {
        console.log(event.target.value);
        this.setState((state) => {
            return {typing: event.target.value}
        })
    }
    add = () => {
        this.setState((state) => {
            let massiv = [...state.todos];
            if (this.state.typing == "") {
                return {}
            } else {
                massiv.push({title: this.state.typing, status: false});
                this.state.typing = "";
                return {todos: massiv, filterTodos: massiv};
            }
        })
    }
    delete = (index) => {
        this.setState((state) => {
            let massiv = [...state.todos]
            massiv.splice(index, 1);
            return {todos: massiv, filterTodos: massiv}
            if (state.a != index) return {a: index}
            else return {a: -1}
        })
    }


    edit = (index) => {
        this.setState((state) => {
            let massiv = [...state.filterTodos]
            this.state.typing = massiv[index].title;
            return {todos: massiv,filterTodos: massiv,  b: !state.b, d: true, idx: index}
        })
    }


    save = () => {
        this.setState((state) => {
            let massiv = [...state.filterTodos];
            massiv[state.idx].title = this.state.typing;
            console.log(massiv);
            return {filterTodos: massiv, b: !state.b, d: false, typing: ""};
        })
    }
    changetheme = () => {
        this.setState((state) => {
            console.log(state);
            return {f: !state.f}
        });
    }

    clearAll = (index) => {
        this.setState((state) => {
            let array = [...state.todos]
            array.splice(index);
            return {todos: array}
        })
    }


    checked = (index) => {
            let array = [...this.state.todos];
            let massiv = array[index].status = !array[index].status;
            this.setState(({todos:massiv}) => {
                console.log(array[index].status);
                return {todos: massiv}
            })
    }

    allTodos = () => {
        this.setState((state) => {
            let array = [...state.todos];
            console.log(array)
            return {filterTodos: array,  activeLink: 1}
        })
    }
    activeTodos = () => {
        this.setState((state) => {
            let array = [...state.todos];
            let filterarray = array.filter((v) => v.status === false);
            console.log(filterarray);
            return {filterTodos: filterarray , activeLink: 2}
        })
    }
    completedTodos = () => {
        this.setState((state) => {
            let array = [...state.todos];
            let filterarray = array.filter((v) => v.status);
            return {filterTodos: filterarray, activeLink: 3};
        })
    }

    render() {
        return (
            <div className={`todos ${this.state.f && "todos__white"}`}>
                <div className="todos__container">
                    <div className="container py-5">
                        <div className=" todo__form ">
                            <Header>
                                <h1 className={`mb-0 fw-bold ${this.state.f && "text-dark"}`}>T O D O</h1>
                                <div>
                                    {
                                        this.state.f ?
                                            <button className="btn text-white" onClick={this.changetheme}><FaMoon/>
                                            </button> :
                                            <button className="btn text-white" onClick={this.changetheme}><FaSun/>
                                            </button>
                                    }
                                </div>

                            </Header>
                            <div className={`todo__content d-flex mt-5 ${this.state.f && "todo__content-white"}`}>
                                {
                                    this.state.d ? <button className="btn text-success  shadow-none plus__btn me-2"
                                                           onClick={this.save}><FaSave/></button> :
                                        <button className={` btn  plus__btn me-2 ${this.state.f && "text-dark"}`}
                                                onClick={this.add}><FaPlusCircle/></button>
                                }

                                <input className={` input form-control shadow-none ${this.state.f && "text-dark"}`}
                                       placeholder="Create new todo" onChange={this.changed} type="text"
                                       value={this.state.typing}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="todo__form">
                        <div className={`todo__content ${this.state.f && "todo__content-white"}`}>
                            <div className={"todos_item"}>
                            {
                                this.state.filterTodos.map((value, index) => {
                                    return <div key={index}
                                                className="d-flex  align-items-center justify-content-between todo__list">
                                        <div className="d-flex align-items-center">
                                            <div id="chekbox" className="me-3 chek__input"
                                                 onClick={() => this.checked(index)}>
                                                { value.status ?   <FaCheck/> : <></> }
                                            </div>
                                            <p className={`mb-0 fw-bold tasks ${this.state.f && "text-dark"}`}>{value.title} {value.status}</p>
                                        </div>
                                        <div className="todo__comp">
                                            <div
                                                className={`d-flex comp  ${this.state.a == index && "comp__hide" || ""}`}>
                                                <button className="btn text-danger shadow-none"
                                                        onClick={() => this.delete(index)}><FaTrash/></button>
                                                <button className="btn text-warning shadow-none"
                                                        onClick={() => this.edit(index)}><FaEdit/></button>
                                            </div>
                                            <button
                                                className={`btn plus__btn  shadow-none  ${this.state.f && "text-dark"}`}
                                                onClick={() => this.showHide(index)}>
                                                <FaBars/>
                                            </button>
                                        </div>
                                    </div>
                                })
                            }
                            </div>
                            <div className="d-flex  footer align-items-center flex-wrap text-white">
                                <p className="mb-0">{this.state.filterTodos.length} items left</p>
                                <div>
                                    <button className={`btn text-secondary shadow-none ${this.state.activeLink == 1 ? "activebtn" : ""} `} onClick={this.allTodos}
                                            id="button">All
                                    </button>
                                    <button className={`btn text-secondary shadow-none ${this.state.activeLink == 2 ? "activebtn" : ""} `} onClick={this.activeTodos}
                                            id="button">Active
                                    </button>
                                    <button className={`btn text-secondary shadow-none ${this.state.activeLink == 3 ? "activebtn" : ""} `} onClick={this.completedTodos}
                                            id="button">Completed
                                    </button>
                                </div>
                                <button className="btn text-secondary shadow-none" onClick={() => this.clearAll()}>Clear
                                    All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
