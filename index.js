        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.z = 5;
        
        var renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setClearColor("#333333");
        renderer.setSize(window.innerWidth,window.innerHeight);

        document.body.appendChild(renderer.domElement);

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth,window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();
        })

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7});
        //var mesh = new THREE.Mesh(geometry, material);

        //scene.add(mesh);

        
        
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = (Math.random() - 0.5) * 10;
            mesh.position.y = (Math.random() - 0.5) * 10;
            mesh.position.z = (Math.random() - 0.5) * 10;
            scene.add(mesh);


        var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
        light.position.set(0,0,0);
        scene.add(light);


        var render = function() {
            requestAnimationFrame(render);


            renderer.render(scene, camera);
        }

        


        


        render();