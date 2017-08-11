import React, { Component, PropTypes } from 'react';
// import { observer as originObserver } from 'mobx-react';

export function inject() {
  let args = arguments

  return function (WrappedComponent) {
    // const ObserverComponent = originObserver(WrappedComponent);
    const ObserverComponent = WrappedComponent;
    
    class ContextContainer extends Component {
      static contextTypes = {
        store: PropTypes.object,
      }
      
      render() {
        let store = this.context.store
        
        if(args.length == 0)
          store = this.context.store
        else{
          store = {}
          for(let index in args){
            store[args[index]] = this.context.store[args[index]]
          }
        }
        return <ObserverComponent {...store} {...this.props} />;
      }
    }
    

    return ContextContainer;
  };
}