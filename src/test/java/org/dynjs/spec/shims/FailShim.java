package org.dynjs.spec.shims;

import org.dynjs.exception.DynJSException;
import org.dynjs.runtime.AbstractNativeFunction;
import org.dynjs.runtime.ExecutionContext;
import org.dynjs.runtime.GlobalObject;

public class FailShim extends AbstractNativeFunction {

    public FailShim(GlobalObject globalObject) {
        super(globalObject, "message");
    }

    @Override
    public Object call(ExecutionContext context, Object self, Object... args) {
        throw new DynJSException(args.length == 1 ? args[0].toString() : "failed");
    }
}
