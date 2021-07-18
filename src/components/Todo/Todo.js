import React, { Component } from 'react'
import { FaBars, FaEdit, FaPlusCircle, FaSave, FaTrash, FaSun, FaMoon } from 'react-icons/fa';
import Header from '../Header/Header';
import './Todo.css';
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: props.todos, typing: '' }
    }

    state = { a: -1, b: true, s: true, d: true, f: true }
    showHide = (index) => {
        this.setState((state) => {
            console.log(state);
            if (state.a != index) return { a: index }
            else return { a: -1 }
        })
    }

    changed = (event) => {
        console.log(event.target.value);
        this.setState((state) => {
            return { typing: event.target.value }
        })
    }
    add = () => {
        this.setState((state) => {
            let massiv = [...state.todos];
            if (this.state.typing == "") {
                return {}
            }
            else {
                massiv.push({ title: this.state.typing });
                this.state.typing = "";
                return { todos: massiv };
            }
        })
    }
    delete = (index) => {
        this.setState((state) => {
            let massiv = [...state.todos]
            massiv.splice(index, 1);
            return { todos: massiv }
        })
        this.setState((state) => {
            console.log(state);
            if (state.a != index) return { a: index }
            else return { a: -1 }
        })
    }


    edit = (index) => {
        this.setState((state) => {
            let massiv = [...state.todos]
            this.state.typing = massiv[index].title;
            return { todos: massiv }
        })
        this.setState((state) => {
            console.log(state)
            return { b: !state.b }

        })
        this.setState((state) => {
            return { d: !state.d }
        })
    }

    save = (index) => {
        this.setState((state) => {

            let massiv = [...state.todos];
            massiv[index].title = this.state.typing;
            return { todos: massiv }


        })
        this.setState((state) => {
            console.log(state)
            return { b: !state.b }
        });
        this.setState((state) => {
            return { d: !state.d }
        })
    }
    changetheme = () => {
        this.setState((state) => {
            console.log(state);
            return { f: !state.f }
        })
    }
    render() {
        return (
            <div className={`todos ${this.state.f && "todos__white"}`}>
                <div className="todos__container">
                    <div className="container py-5">
                        <div className=" todo__form ">
                            <Header >
                                <h1 className={`mb-0 fw-bold ${this.state.f && "text-dark"}`}>T O D O</h1>
                                <div>
                                    {
                                        this.state.f ? <button className="btn text-white" onClick={this.changetheme}><FaMoon /></button> : <button className="btn text-white" onClick={this.changetheme}><FaSun /></button>
                                    }
                                </div>

                            </Header>
                            <div className={`todo__content d-flex mt-5 ${this.state.f && "todo__content-white"}`}>
                                {
                                    this.state.d ? "" : <button className={` btn  plus__btn me-2 ${this.state.f && "text-dark"}`} onClick={this.add}><FaPlusCircle /></button>
                                }

                                <input className={` input form-control shadow-none ${this.state.f && "text-dark"}`} placeholder="Create new todo" onChange={this.changed} type="text" value={this.state.typing} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="todo__form">
                        <div className={`todo__content ${this.state.f && "todo__content-white"}`}>
                            {
                                this.state.todos.map((value, index) => {
                                    return <div className="d-flex  align-items-center justify-content-between todo__list">
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" className="me-3 chek__input" />
                                            <p className="mb-0 fw-bold tasks">{value.title}</p>
                                        </div>
                                        <div className="todo__comp">
                                            <div className={`d-flex comp ${this.state.a == index && "comp__hide" || ""}`}>
                                                <button className="btn text-danger shadow-none" onClick={() => this.delete(index)}><FaTrash /></button>
                                                {
                                                    this.state.b ? <button className="btn text-white  shadow-none plus__btn me-2" onClick={() => this.save(index)}><FaSave /></button> : <button className="btn text-warning shadow-none" onClick={() => this.edit(index)}><FaEdit /></button>

                                                }
                                            </div>
                                            <button className={`btn plus__btn  shadow-none  ${this.state.f && "text-dark"}`} onClick={() => this.showHide(index)}>
                                                <FaBars />
                                            </button>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
