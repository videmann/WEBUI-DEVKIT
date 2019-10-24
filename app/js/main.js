var Application = function (params)
{
    this.params = params;
    // methods
    this.metrix = {
        'goal': function (node, params)
        {
            if (!node) return;

            ym(this.params.metrix.yandex.sensorID, 'reachGoal', node.getAttribute('data-goal-target'), this.params.metrix.yandex.params||{});
            // google goes here
        }
    };
    this.state = {
        'node': function (node, properties)
        {
            if(!node) return;

            if (node&&properties)
            {
                var node = document.querySelector(node);
                if (state == 'apply')
                {
                    if (properties)
                    {
                        for(var property in properties)
                        {
                            node.setAttribute('style', properties[property] + ':' + property)
                        };
                    };
                    if (className)
                    {
                        node.classList.add(className);
                    }
                } else if (state == 'static') {
                    node.hasAttribute('style') ? node.removeAttribute('style') : node.classList.remove(className);
                } else return;
            };
        }
    };
    this.form = {
        'patterns': {
            'phone': /^((\+7|7|8)+([0-9]){10})$/,
            'email': /.+@.+\..+/i
        },
        'validate': function (form)
        {
            // code
        },
        'mask': function (node)
        {
            // code
        }
    }
};

var app = new Application({
    'metrix': {
        'yandex': {
            'sensorID': 'XXXXXX',
            'params': {}
        },
        'google': {
            'sensorID': 'XXXXXX',
            'params': {}
        }
    }
});

var init = function ()
{
    document.addEventListener('click touchstart', function (event)
    {
        // yandex reachGoal
        if (event.target.hasAttribute('data-goal')) app.metrix.goal(event.target);
    });
    document.addEventListener('input change', function (event)
    {
        // code
    });
    document.addEventListener('keyup', function (event)
    {
        // code
    });
    document.addEventListener('submit', function (event)
    {
        // code
    });
    document.addEventListener('progress', function (event)
    {
        // code
    });
};

document.addEventListener('DOMContentLoaded', init);